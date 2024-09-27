// Endpoint for querying the fibonacci numbers

import { Request, Response } from 'express';
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const { num } = req.params;

  // Verifica que 'num' sea un número
  const parsedNum = parseInt(num);
  if (isNaN(parsedNum)) {
    return res.send("Invalid input, please provide a number.");
  }

  const fibN: number = fibonacci(parsedNum);
  let result = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};
