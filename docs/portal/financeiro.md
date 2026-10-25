---
title: Financeiro e repasses
description: Como valores, comissões, estornos e repasses permanecem separados.
public: true
---

# Financeiro e repasses

## Valores independentes

| Componente | Significado | Não deve ser confundido com |
|---|---|---|
| Produtos | Valor dos itens após desconto aplicável | Frete |
| Comissão | Parcela contratual calculada sobre produtos | Receita de entrega |
| Líquido do parceiro | Produtos menos comissão e ajustes | Saldo bancário transferido |
| Frete | Valor cobrado do cliente pela entrega | Remuneração do motoboy |
| Remuneração | Valor aceito pelo motoboy para a corrida | Compra dos produtos |
| Compra em fábrica | Desembolso real para adquirir itens da revenda | Comissão ou corrida |

Todos os cálculos persistidos usam centavos e arredondamento consistente. Valores comerciais relevantes são copiados para o pedido para que mudanças futuras não alterem o histórico.

## Comissão do parceiro

A comissão incide somente sobre a base de produtos após descontos; o frete fica fora. No pagamento confirmado, o pedido registra percentual, base, comissão e líquido.

Exemplo ilustrativo, sem definir taxa comercial:

```text
base de produtos = subtotal − desconto
comissão = base × percentual vigente no pedido
líquido do parceiro = base − comissão
```

Alterar o percentual do estabelecimento depois não modifica pedidos existentes.

## Quando o saldo fica disponível

Pagamento confirmado não significa saldo imediatamente liberado. Enquanto o pedido não for entregue, o líquido permanece pendente. Após `DELIVERED`, o sistema cria um crédito auditável para a unidade.

O extrato diferencia valores pendentes, disponíveis e já registrados como repassados.

## Estornos

Em pedido parceiro, o administrador informa quanto do reembolso corresponde aos produtos. Essa parcela reverte proporcionalmente comissão e líquido, sem afetar silenciosamente frete ou remuneração.

- Antes da liberação, o crédito futuro já nasce reduzido.
- Depois da liberação, é criado um débito no extrato.
- Um estorno que deixaria o saldo negativo é bloqueado até regularização documentada.
- Repetir a mesma operação não duplica lançamentos.

## Repasses manuais

O administrador pode registrar repasse total ou parcial com beneficiário, valor, data e referência única. O registro reduz o saldo disponível e preserva quem realizou a conciliação.

O sistema **não envia PIX**, não movimenta conta bancária e não disponibiliza saque. O registro pressupõe que a transferência ocorreu fora da plataforma.

## Compras nas fábricas

Na revenda, um pedido pode gerar várias compras, uma por fornecedor. Cada compra registra valor efetivamente pago, pagador, data e comprovante opcional. Adiantamentos e reembolsos ao motoboy permanecem separados da remuneração da entrega.

## Decisões ainda necessárias

- Percentual e regras contratuais por parceiro.
- Prazo de liberação e calendário de repasses.
- Responsabilidade por cancelamentos, chargebacks e divergências.
- Tratamento tributário, documentos fiscais e conciliação com o provedor de pagamento.

Até essas decisões serem aprovadas, a implementação financeira deve ser tratada como controle operacional em homologação, não como autorização comercial ou regulatória.
