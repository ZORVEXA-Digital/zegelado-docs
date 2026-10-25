---
title: Operação e logística
description: Jornada do pedido, estados, despacho, retiradas e exceções.
public: true
---

# Operação e logística

## Jornada ponta a ponta

1. O cliente escolhe produtos de uma origem compatível e informa o endereço.
2. O servidor valida disponibilidade, pedido mínimo, zona de entrega, preços e desconto aplicável.
3. O pedido é criado com snapshots dos itens e aguarda o PIX.
4. O administrador confirma o pagamento.
5. Na revenda, a operação organiza as retiradas; no parceiro, a unidade aceita e prepara.
6. Quando o pedido está pronto, o administrador informa a distância estimada e envia uma oferta individual.
7. Um motoboy aprovado e disponível aceita a oferta.
8. O motoboy confirma cada retirada na ordem definida.
9. A entrega avança até a conclusão e libera os registros financeiros correspondentes.

## Estados que não podem ser pulados

### Preparo parceiro

`RECEIVED → ACCEPTED → PREPARING → READY`

O pedido só chega ao despacho depois de `READY`. Repetir a mesma ação não deve duplicar histórico ou efeitos financeiros.

### Entrega

`READY → PICKED_UP → OUT_FOR_DELIVERY → DELIVERED`

- `READY`: pedido pronto, ainda antes da retirada.
- `PICKED_UP`: todas as retiradas obrigatórias foram confirmadas.
- `OUT_FOR_DELIVERY`: deslocamento final ao cliente iniciado.
- `DELIVERED`: entrega concluída; estado que permite liberar o líquido do parceiro.

## Oferta e atribuição

Cada oferta pertence a uma entrega e a um motoboy. Ela pode ser aceita, recusada, expirada, retirada administrativamente ou encerrada porque outra oferta venceu a corrida.

O aceite é exclusivo. Um motoboy com entrega ativa não pode aceitar outra, mesmo sob requisições concorrentes. O valor, a distância e a faixa de remuneração são preservados na oferta e na atribuição.

## Múltiplas retiradas

O administrador define uma sequência contendo cada origem obrigatória uma única vez. O motoboy vê todos os pontos antes de aceitar e confirma cada um individualmente. Alterar depois o cadastro da fábrica ou unidade não modifica o endereço histórico da retirada.

Confirmar fora de ordem, confirmar retirada de outra entrega ou iniciar a etapa final com ponto pendente é bloqueado.

## Cancelamento e reatribuição

- Antes de `PICKED_UP`, o administrador pode cancelar a atribuição com motivo e despachar novamente.
- A desatribuição não cancela pedido, pagamento ou histórico.
- Ofertas antigas deixam de ser válidas.
- Depois de `PICKED_UP`, não existe reatribuição automática; a ocorrência exige tratamento operacional separado.

## Disponibilidade e suspensão

Somente perfis aprovados e ativos operam como motoboy. A suspensão é bloqueada se houver entrega em `READY`, `PICKED_UP` ou `OUT_FOR_DELIVERY`. Quando permitida, encerra ofertas ainda pendentes.

Um administrador pode atuar como motoboy por meio de perfil adicional aprovado, mantendo o papel administrativo principal e as autorizações contextuais.

## Atualização das telas

Painéis usam polling autenticado e leve enquanto estão abertos. Mudanças de oferta, retirada e entrega aparecem sem depender de WebSockets. Não há promessa de notificação com o navegador ou a PWA fechados.
