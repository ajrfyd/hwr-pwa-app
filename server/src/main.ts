import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import admin from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail:
        'firebase-adminsdk-yryid@test-fd-55b95.iam.gserviceaccount.com',
      privateKey:
        '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDqhc8Hc41+cZKD\n/c963EqbZ/jatGv1742yMnVmCviShIOeFjg1gnaZc/7XN0v2/1gAsz8Vl11S7JsN\n+Y+/JHtdXL0sw6kcD7SFBp4tDaqJz8cCHGdRM/xV1WOcgJ63rBnnjlWroPTtCVnj\nSuqPFmk+HTUwCYfBzznonWjZrvJ8fMmAnmTyg5/OAGzgt0JalrlSlhwhN3afw9E7\nPgxAdu2q9Dx4SN7ENc4pvVOQggmfXRR9eC4Cd+AmEZEiuyvRGh31SsUtBBP6lzHn\ncv60nF3vuYj/u89AE25oSk4seMvEpupw5oCizCgXvadCfrnKfAcEERYIccDMHAok\nu2KcgxOPAgMBAAECggEACTrZ7vlrT1d7RG4H9FYuKp6Y/ITAusL7M5giA3i1157P\n1UZUCeIyvYE8PYdZNr4VJUs+AGhCW9dLekK2UGmPbnzVKdQEZokozz3pKFDhUbvz\n2khcObP5ym87BozzVbtUhI36rUmXH3I0DA4peIj1GNaqcEV+3D4bWLq1OE1W9I+N\nL8ltgqKQ9PCXoZNg4ZwKYYMqv0Z1Apq0jYXciCNBtFlTwwo/gfp5WW598VH0Lex+\nQqTtIltqNEnyfL16Q5BjhdC8AwdjdcXQUvE6XDTegQaDdBsRFAaWWB+eY6csk0Lz\nEwDcghcdO14JXraeEOSufreXihatdAGgbPzdkJDqDQKBgQD9s+QKdGBa9fcIYIBK\njPVzsQE1ExdpfhNb7xDSV0gLC7bRkJn+yu8TJWEkf58k9QR6wGCAKL+6pvu6lJNk\nlV+0E6GBK/k24coJXb0emd2epkWbGM1sbLp6MFtw3eLeO1AE3WURhQcsZfmvKjza\nn/WG7mgDs3NCv1KQ4Cv6J27sBQKBgQDspXToaBtso1hhK5QxRvaGgQh3rAQLddQe\nTr5iGk0URsUGNFJYPWjUcjLm2GOGTg03alHCItM0CINXaSHUBZCyZI+U9mkFuvbH\nmnfLxQuY8oF+9BMbl3WtryIy6EywnODzja2bFwkkq8c3I7M+4Kxl+YTrD0fdDKyg\nIWEbZP2pgwKBgBo0J1yREpayivZZiUap8nwljxtdQnDJ7dP0CEfBbhZ9+j8A8Xbo\nnPLcTIFJkTVu/Sx0jEMQcmUj9CIcUHD2ILFnyame0hnCDm0TOoJboBFP2Sag1C7b\nuBMAxaENue38MFKgT10U4V3LlpNqCGkIVoK+Qw4GzePaAPwnu0MWKZXFAoGATUBO\nA7hIi5RfO4lQXS2/OHVS4E4lG+ChGCu4dqoDU4UuuDHIV8nkOMX22+jzxFoicl6g\nxfE8ZRYKWjSVuHMAo1u0i3pNGnPIL6y7QqfWe11e7KScwDsXTVWIonm230i3Hoq3\ni5NfhrsU02kyEGqjnL5xp5JbcUu75qI+4wR60iUCgYEAy/cm7mxIgIWiVaE5HSsw\nc+KgCBFwlw8qL4Eg+gjtOAdA3+PDX5WpN2GQoafIneMBe0sNFXH1ePIN/7MvY4pg\n6buKef/WaNWRMYX4kA2SzOwWcdpjYb8Si6B0hTvfLpn0x5WoMn9uCmC1XO5zZfRo\n/OzMRB51is71rRaOJG17Q84=\n-----END PRIVATE KEY-----\n',
      projectId: 'test-fd-55b95',
    }),
  });
  app.enableCors({
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE'],
    origin: ['http://localhost:5000'],
  });
  await app.listen(parseInt(process.env.PORT));
}
bootstrap();
