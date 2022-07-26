export interface IUser {
  apiKey: string;
  appName: string;
  createdAt: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  lastLoginAt: string;
  uid: string;
  providerData: providerData[];
  stsTokenManager: stsTokenManager;
}

interface providerData {
  displayName: string | null;
  email: string;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}

interface stsTokenManager {
  accessToken: string;
  expirationTime: number;
  refreshToken: string;
}
