class AppError {
  public message: string;
  public statusCode: number;

  contructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;

  }
}

export default AppError;
