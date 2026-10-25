---
title: Arquitetura e desenvolvimento
description: Visão técnica pública da aplicação e dos seus limites.
public: true
---

# Arquitetura e desenvolvimento

## Stack

| Camada | Tecnologia |
|---|---|
| Backend | Laravel 13 e PHP 8.4 |
| Persistência | MySQL 8.4 |
| Interface | Blade, Bootstrap 5 e JavaScript |
| Assets | Vite |
| Aplicação instalável | PWA básica |
| Portal de conhecimento | VitePress |

O sistema segue um monólito modular: controllers coordenam requisições, services concentram operações críticas e Eloquent mantém relacionamentos e snapshots. Não existe uma API pública nem uma SPA paralela no MVP.

## Superfícies do produto

- **Loja:** catálogo, carrinho, checkout, pagamento e acompanhamento.
- **Administração:** cadastros, pagamentos, pedidos, logística e financeiro.
- **Motoboy:** disponibilidade, ofertas, retiradas, entrega e resumo financeiro.
- **Parceiro:** unidades autorizadas e preparação de pedidos.

Cada área usa autenticação e autorização próprias. O vínculo a um estabelecimento ou unidade não é inferido apenas por um identificador informado na URL.

## Integridade histórica

Pedidos não dependem do catálogo atual para explicar o passado. Itens guardam nome, variação, preço, custo, quantidade e origem aplicáveis à compra. Entregas preservam pontos de retirada e remuneração aceitos. Pedidos parceiros preservam dados da unidade e comissão.

Essa abordagem permite alterar um cadastro futuro sem reescrever pedidos concluídos.

## Consistência das operações

Operações que mudam dinheiro, pagamento, atribuição ou estado usam transações. Registros críticos são bloqueados durante alterações concorrentes e ações repetidas usam chaves ou regras de idempotência.

O objetivo observável é simples: dois cliques ou duas requisições simultâneas não podem gerar duas confirmações, duas atribuições ou dois repasses.

## PWA e conectividade

A PWA fornece instalação e cache conservador de assets estáticos. Navegações, checkout, pagamentos, painéis e estados operacionais dependem da rede e não são armazenados para comércio offline. Essa decisão evita exibir dados privados ou estados antigos como se fossem atuais.

## Qualidade

O projeto mantém testes automatizados para compras, autorização, estados, concorrência, histórico e cálculos financeiros. Build, formatação e validação de diferenças fazem parte do processo de entrega. A validação automatizada não substitui testes móveis e operacionais em staging.
