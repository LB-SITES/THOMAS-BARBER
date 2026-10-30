# Arquitetura e etapas

## Etapa 1 — estrutura e interface

Next.js App Router renderiza a landing page no servidor. Apenas o menu móvel usa estado no cliente. Button usa Radix Slot, CVA e os utilitários shadcn/ui. Conteúdo fica separado dos componentes. Sem chaves, dados reais, contas fictícias de acesso ou dependência de banco. Valores de exemplo em centavos.

Validação manual: abrir em 375px e 1440px, navegar com teclado, abrir/fechar menu, testar âncoras, verificar contraste, imagens e preferência por movimento reduzido. CTAs informam que reservas ainda não estão disponíveis. Typecheck e build são verificações obrigatórias desta etapa; testes de integração de negócio serão adicionados quando houver regras de negócio.

## Próximas etapas (ainda não implementadas)

2. Supabase/PostgreSQL: migrations para companies, memberships, barbers, categories, services, customers, appointments, business_hours, barber_hours, schedule_blocks, payments, settings e audit_logs. Todas as entidades privadas terão company_id e referências compostas para impedir relações entre empresas. RLS validará memberships e auth.uid(). Não confiar em company_id enviado pelo navegador.
3. Disponibilidade: horários locais IANA da empresa, instantes timestamptz, intervalos semiabertos, duração e preço capturados na reserva. Uma transação validará expediente, disponibilidade individual, bloqueios e serviço ativo. Exclusion constraint GiST para intervalos por empresa/barbeiro protegerá contra concorrência; bloqueios precisam participar da mesma exclusão. Reserva pública via função/endpoint restrito, nunca leitura pública de clientes ou agenda completa. Rate limit, validação de telefone e idempotência.
4. Auth SSR com cookies seguros e verificação no servidor. Administrador gerencia somente sua empresa; barbeiro acessa apenas agenda própria e finanças explicitamente autorizadas. Sem senhas padrão. Convites gerados no servidor. Segredos privilegiados exclusivos do servidor.
5. Painel: agenda com filtros, estados e reagendamento transacional; serviços, equipe, horários e configurações. Auditar mudanças relevantes, sem guardar dados pessoais desnecessários em logs.
6. Financeiro: pagamentos em centavos, estado liquidado e atendimento concluído. Não usar reservas futuras como receita. Recharts, filtros com fuso horário da empresa, CSV com proteção contra fórmulas e autorização no servidor.
7. Testes: concorrência de reservas, limites e intervalos, horários de verão, isolamento RLS entre empresas/perfis, autorização de todas as mutações, receita somente paga/concluída e exportação CSV. Supabase local ou projeto de teste isolado, sem dados de produção.
8. Publicação: migrations em staging, configuração segura de variáveis, testes completos, domínio, backups, observabilidade e política LGPD com minimização, retenção e exclusão. Fotos devem ter licença e aprovação do cliente. Publicar somente após integração e verificações.

## Limites atuais

Não há migrations nem conexão Supabase nesta etapa visual. `.env.example` antecipa os nomes públicos necessários à futura integração, sem inventar credenciais. Recharts será instalado junto do módulo financeiro. Endereço, número e perfis reais precisam ser fornecidos antes da publicação comercial.
