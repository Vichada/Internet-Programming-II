import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<{
      headers: Record<string, string | string[] | undefined>;
    }>();
    const configuredApiKey = process.env.API_KEY ?? 'itc-123';

    const headerValue = req.headers['x-api-key'];
    const apiKey = Array.isArray(headerValue) ? headerValue[0] : headerValue;

    if (!apiKey || apiKey !== configuredApiKey) {
      throw new UnauthorizedException('Invalid API key');
    }

    return true;
  }
}
