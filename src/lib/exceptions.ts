export class AuthRequiredException extends Error {
  constructor(message = "Authentication is required to access this resource") {
    super(message);
    this.name = "AuthRequiredException";
  }
}

export class NotFoundException extends Error {
  constructor(message = "The requested resource was not found") {
    super(message);
    this.name = "NotFoundException";
  }
}
