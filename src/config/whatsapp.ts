/** Mensagem pré-preenchida em todos os links de WhatsApp do site. */
export const WHATSAPP_PREFILL_MESSAGE =
  'Olá! Gostaria de agendar uma consulta com o Dr. Raphael Serra Cruz.';

export const WHATSAPP_PHONE_E164 = '5519998321140';

/** URL wa.me com texto de agendamento (uso em href). */
export const WHATSAPP_AGENDAR_HREF = `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(WHATSAPP_PREFILL_MESSAGE)}`;
