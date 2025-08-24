export enum StatusCode {
  // ✅ Sucesso
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,

  // ⚠️ Erros do cliente
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,

  // ❌ Erros do servidor
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503
}
