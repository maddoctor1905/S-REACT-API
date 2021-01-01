import { ApiProperty } from '@nestjs/swagger';

export interface CreateTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

export interface GetAccountResponse {
  country: string;
  display_name: string;
  email: string;
  external_urls: { spotify: string; },
  followers: { href: string, total: number };
  href: string;
  id: string;
  product: string;
  type: string;
  uri: string;
}

export class SpotifyImage {
  @ApiProperty()
  height: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  width: number;
}

export class SpotifyUser {
  @ApiProperty()
  display_name: string;

  @ApiProperty()
  href: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  uri: string;
}