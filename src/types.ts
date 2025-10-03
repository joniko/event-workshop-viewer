export type Ticket = {
    TicketID: string;
    'Número de Pedido': string;
    'Entrada: Número': string;
    'Pedido: Número': string;
    'Evento: Nombre': string;
    'Pedido: Estado': string;
    'Pedido: Fecha': string;
    'Apellido': string;  // Añadido este campo ya que parece ser importante para el ordenamiento
    '# de Pedido': string;  // Añadido este campo que estaba en la definición anterior de EventTable
    [key: string]: string;  // Para otros campos dinámicos
  };