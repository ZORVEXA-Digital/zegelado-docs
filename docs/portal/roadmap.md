---
title: Roadmap e homologação
description: Estado atual, critérios para o piloto e capacidades futuras.
public: true
---

# Roadmap e homologação

## Agora: preparar staging

O código do MVP híbrido está consolidado e validado automaticamente. O próximo marco é provar o mesmo comportamento em ambiente isolado e próximo da operação real.

Critérios mínimos:

- domínio de staging e HTTPS válidos;
- banco, storage, sessões e credenciais isolados;
- migrations aplicadas após backup verificado;
- aplicação, filas e scheduler em execução;
- catálogo, checkout e PIX manual testados em celular;
- admin, parceiro e motoboy validados com contas distintas;
- restauração e rollback ensaiados sem dados reais.

## Depois: piloto controlado

O piloto deve começar com catálogo e área de entrega limitados, poucas unidades e motoboys aprovados. Cada pedido precisa percorrer compra, pagamento, preparo ou retirada, despacho, entrega e conciliação.

Durante o piloto, registrar:

- tempo entre pagamento, preparo, retirada e entrega;
- ofertas expiradas, recusadas ou reatribuídas;
- divergências de disponibilidade e custo;
- frete cobrado, remuneração e margem operacional;
- estornos, ajustes e repasses manuais;
- falhas de uso em telas móveis.

## Planejado para fases futuras

- Gestão de produtos e preços pelo parceiro.
- Canais externos de notificação homologados.
- Integração com mapas, cálculo automático de rota ou GPS.
- Integração bancária, split ou saque, caso aprovados.
- Operação comercial mais autônoma por estabelecimento.

Esses itens não devem ser apresentados como disponíveis no piloto.

## Decisões externas

Antes de movimentar pagamentos centralizados e repasses reais, precisam estar aprovados:

- contrato e comissão de cada parceiro;
- responsabilidade por cancelamentos, estornos e chargebacks;
- emissão e guarda de documentos fiscais;
- prazo de liberação e rotina de conciliação;
- aderência do modelo ao provedor de pagamento e à orientação jurídica e contábil.

## Sinal de prontidão

O piloto está pronto quando todos os smoke tests passarem em staging, o restore estiver comprovado, os cadastros reais tiverem sido conferidos e os responsáveis souberem executar e reverter cada etapa crítica.
