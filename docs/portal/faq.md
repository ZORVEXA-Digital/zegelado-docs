---
title: Perguntas frequentes
description: Respostas para clientes, administradores, motoboys e parceiros.
public: true
---

# Perguntas frequentes

## Cliente

### Preciso criar uma conta?

Não. É possível concluir o checkout como convidado. Os dados solicitados se limitam ao necessário para pedido, pagamento, entrega e suporte.

### Posso agendar?

Não. O MVP atende somente pedidos imediatos.

### Por que um produto ou unidade não aparece?

Produtos inativos, origens inativas ou fornecedores sem dados mínimos para retirada não entram no catálogo público.

### Como sei se meu endereço é atendido?

O checkout consulta a zona configurada por estado, cidade e bairro. Se não houver zona válida, o sistema não presume entrega gratuita.

### O pagamento é confirmado automaticamente?

Não no piloto. O PIX é confirmado pelo administrador depois da conferência.

## Administrador

### Posso alterar livremente o estado de um pedido?

Não. Cada ação contextual segue uma transição permitida e registra histórico.

### Quando despacho um pedido parceiro?

Depois do PIX confirmado e de a unidade concluir `RECEIVED → ACCEPTED → PREPARING → READY`.

### Posso trocar o motoboy?

Antes da retirada, sim, com motivo obrigatório. Depois de `PICKED_UP`, a reatribuição automática é bloqueada.

### Posso suspender um motoboy durante uma corrida?

Não. Primeiro é necessário concluir ou resolver operacionalmente a entrega ativa.

### O administrador também pode ser motoboy?

Sim. É necessário um perfil adicional aprovado e ativo; o acesso administrativo permanece disponível.

## Motoboy

### Por que não consigo ficar disponível?

Perfis pendentes, suspensos ou com entrega ativa não podem anunciar disponibilidade.

### Posso aceitar mais de uma oferta?

Ofertas podem ser vistas conforme elegibilidade, mas o primeiro aceite válido cria atribuição exclusiva e impede outra entrega simultânea.

### A remuneração pode mudar depois do aceite?

Não. Distância, faixa e remuneração aceitas ficam registradas como snapshot.

### Posso confirmar as retiradas em qualquer ordem?

Não. A sequência administrativa deve ser respeitada, e todas as retiradas precisam ser concluídas antes da saída final.

## Parceiro

### Consigo acessar unidades de outro estabelecimento?

Não. O perfil é vinculado a um único estabelecimento e apenas às unidades explicitamente autorizadas.

### Quais ações estão disponíveis no pedido?

Visualizar detalhes e avançar sequencialmente por aceitar, iniciar preparo e marcar como pronto.

### Posso cadastrar produtos ou alterar preços?

Não nesta fase. O catálogo parceiro continua sob administração central.

### Posso solicitar saque pelo painel?

Não. O financeiro administrativo registra saldo e repasses realizados externamente, sem saque ou transferência automática.

## Limitações conhecidas

- Atualizações automáticas dependem de a tela permanecer aberta.
- Não há GPS, mapas ou roteirização integrada.
- Checkout e painéis não funcionam offline.
- Operações reais dependem de homologação e decisões comerciais externas.
