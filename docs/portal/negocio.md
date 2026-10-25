---
title: Negócio e estratégia
description: Modelo híbrido, proposta de valor e limites comerciais do MVP.
public: true
---

# Negócio e estratégia

## Proposta

O ZéGelado concentra a descoberta, compra e entrega de produtos gelados em uma experiência local. O foco inicial é reduzir a fricção entre escolher o produto, confirmar o pagamento, organizar a retirada e acompanhar a entrega.

O MVP não tenta automatizar toda a cadeia. O administrador continua responsável por validar pagamentos, acompanhar exceções e despachar cada corrida.

## Dois modelos na mesma plataforma

### Revenda própria

O cliente compra no catálogo ZéGelado. A operação adquire ou retira os itens nas fábricas cadastradas e realiza a entrega. `Supplier` representa esses fornecedores internos e não oferece login ou painel comercial.

Um pedido pode reunir produtos de mais de uma fábrica. O sistema preserva o fornecedor de cada item e permite organizar uma sequência de retiradas.

### Marketplace parceiro

Um estabelecimento pode possuir várias unidades. Produtos parceiros pertencem a uma unidade específica, com preço e disponibilidade próprios. Nesta fase, cada pedido parceiro contém itens de uma única unidade; misturar unidades ou combinar revenda e parceiro no mesmo carrinho é bloqueado.

O parceiro recebe o pedido pago, aceita, inicia o preparo e marca como pronto. O despacho continua sob controle do administrador.

## O que o cliente encontra

- Picolés, sorvetes, açaí, combos e outras sobremesas geladas cadastradas.
- Catálogo público limitado a produtos e origens ativos e operacionalmente disponíveis.
- Carrinho com quantidades e preços recalculados pelo servidor no checkout.
- Checkout sem obrigação de criar conta.
- Entrega imediata para endereço atendido por uma zona configurada.
- PIX com confirmação manual no piloto.

## Limites atuais

| Incluído no MVP | Fora do recorte atual |
|---|---|
| Pedido imediato | Agendamento |
| Despacho manual individual | Roteirização ou GPS automático |
| Preparo operacional pelo parceiro | Gestão autônoma de catálogo pelo parceiro |
| Registro manual de repasse | Saque, split ou transferência automática |
| Polling com a aplicação aberta | Garantia de alerta com navegador fechado |
| Distância informada no despacho | Integração com mapas |

## Critério para o piloto

Capacidade técnica não basta. Antes de operar com usuários reais, o projeto precisa de staging isolado, HTTPS, backup restaurável, cadastros conferidos, roteiro de suporte e regras comerciais aprovadas.
