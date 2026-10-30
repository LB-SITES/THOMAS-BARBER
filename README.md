# Thomas Barber Club

Primeira etapa: interface pública demonstrativa em Next.js App Router, TypeScript, Tailwind CSS 4, componentes no padrão shadcn/ui (Button com Radix Slot) e Lucide. Node.js 22+; validado com Node 24.

## Executar

```sh
npm ci
npm run dev
```

Abra a porta 3000 no seu ambiente de desenvolvimento. Para validar:

```sh
npm run typecheck
npm run build
npm start
```

O build não depende de Supabase. Copie `.env.example` para `.env.local` somente na etapa de integração e use dados do seu próprio projeto. Nunca versione segredos; uma chave service_role nunca deve ser pública.

## O que funciona

Landing page responsiva, menu móvel, navegação por âncoras, catálogo visual, equipe, galeria, depoimentos fictícios, informações de contato e estado explícito de agendamento indisponível. Todos os nomes, preços, horários e depoimentos são exemplos. Fotografias de referência carregadas de images.unsplash.com requerem conexão; substituir por fotos próprias/licenciadas antes de comercializar. Não há coleta de dados pessoais, reserva ou autenticação nesta etapa. O botão flutuante leva às informações de contato até haver um WhatsApp real.

## Estrutura

- `src/app`: rotas, layout, metadados e estilos globais.
- `src/components/site`: componentes interativos da página pública.
- `src/components/ui`: primitives de interface no padrão shadcn/ui.
- `src/lib/site.ts`: conteúdo demonstrativo com dinheiro em centavos.
- `docs/architecture.md`: evolução planejada e critérios de aceite.

Antes de publicar, personalizar conteúdo, configurar domínio, política de privacidade e remover `robots: noindex` apenas quando o conteúdo for real. A aplicação ainda não é um sistema comercial completo; banco, pagamentos, autenticação e painel não foram implementados.

### Restrição observada no ambiente

O proxy desta sessão bloqueia `images.unsplash.com` (HTTP 403). As fotografias externas têm fallback visual e continuam referenciadas; para visualizá-las, permita esse domínio nas configurações de rede ou substitua as referências por arquivos próprios em `public/`. Isso não impede renderização, navegação ou build.

Os scripts usam Webpack: o Turbopack encontrou uma restrição de abertura de portas auxiliares neste ambiente. Não é necessário desativar verificações de tipos.
