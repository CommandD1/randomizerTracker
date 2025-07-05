export class CookieSet {
  private cookieName: string;
  private delimiter: string;

  constructor(cookieName: string, delimiter = ',') {
    this.cookieName = cookieName;
    this.delimiter = delimiter;
  }

  private getCookie(): string | null {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith(this.cookieName + '='));
    return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
  }

  private setCookie(value: string): void {
    const days = 30;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${this.cookieName}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  }

  private getSet(): Set<string> {
    const cookieValue = this.getCookie();
    if (!cookieValue) return new Set();
    return new Set(cookieValue.split(this.delimiter).filter(Boolean));
  }

  private updateCookie(set: Set<string>): void {
    const value = Array.from(set).join(this.delimiter);
    this.setCookie(value);
  }

  add(value: string): void {
    const currentSet = this.getSet();
    currentSet.add(value);
    this.updateCookie(currentSet);
  }

  remove(value: string): void {
    const currentSet = this.getSet();
    currentSet.delete(value);
    this.updateCookie(currentSet);
  }

  has(value: string): boolean {
    return this.getSet().has(value);
  }

  toArray(): string[] {
    return Array.from(this.getSet());
  }
}
