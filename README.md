<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/22acbd0d-ab7f-4c86-b75b-e0761eeab570

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Copy [.env.example](.env.example) to `.env` and fill in:
   - `GEMINI_API_KEY` (opcional, se usar recursos que dependam dele)
   - `GOOGLE_PLACES_API_KEY` e `GOOGLE_PLACE_ID` — necessários para o card “Google” em **Avaliações** (nota e quantidade de avaliações em tempo real). Na Vercel, configure as mesmas variáveis em *Settings → Environment Variables*.
   - **Importante:** a Places API é chamada **no servidor** (`/api/google-reviews`). Uma chave com restrição **somente a sites HTTP (referrer)** não funciona nesse fluxo. Crie uma chave para uso server-side com **restrição por IP** (ex.: saída da Vercel), ou use uma chave sem restrição de aplicativo só em desenvolvimento.
3. Run the app:
   `npm run dev`

Em desenvolvimento, `npm run dev` serve `GET /api/google-reviews` via middleware do Vite (mesmo contrato da função serverless na Vercel).
