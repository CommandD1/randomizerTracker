
export class CookieMap {
  private key: string;

  constructor(storageKey: string) {
    this.key = storageKey;
    this.migrateFromCookie();
  }

  // Migrate data from cookie to localStorage
  private migrateFromCookie(): void {
    const cookieValue = this.getCookie();
    if (cookieValue) {
      try {
        const parsed = JSON.parse(decodeURIComponent(cookieValue));
        localStorage.setItem(this.key, JSON.stringify(parsed));
        this.deleteCookie();
      } catch (e) {
        console.warn('Failed to migrate cookie data:', e);
      }
    }
  }

  private getCookie(): string | null {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith(this.key + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  private deleteCookie(): void {
    document.cookie = `${this.key}=; Max-Age=0; path=/;`;
  }

  private loadMap(): Map<string, string[]> {
    const raw = localStorage.getItem(this.key);
    if (!raw) return new Map();
    try {
      const obj = JSON.parse(raw);
      const map = new Map<string, string[]>();
      for (const key in obj) {
        if (Array.isArray(obj[key])) {
          map.set(key, obj[key]);
        }
      }
      return map;
    } catch {
      return new Map();
    }
  }

  private saveMap(map: Map<string, string[]>) {
    const obj: Record<string, string[]> = {};
    for (const [key, values] of map.entries()) {
      obj[key] = values;
    }
    localStorage.setItem(this.key, JSON.stringify(obj));
  }

  add(key: string, value: string): void {
    const map = this.loadMap();
    const values = map.get(key) || [];
    if (!values.includes(value)) {
      values.push(value);
      map.set(key, values);
      this.saveMap(map);
    }
  }

  remove(key: string, value: string): void {
    const map = this.loadMap();
    const values = map.get(key);
    if (!values) return;
    const index = values.indexOf(value);
    if (index !== -1) {
      values.splice(index, 1);
      if (values.length === 0) {
        map.delete(key);
      } else {
        map.set(key, values);
      }
      this.saveMap(map);
    }
  }

  has(key: string, value: string): boolean {
    const map = this.loadMap();
    const values = map.get(key);
    return values ? values.includes(value) : false;
  }

  get(key: string): string[] {
    const map = this.loadMap();
    return map.get(key) || [];
  }
  keys():string[]{
    return Array.from(this.loadMap().keys());
  }
  toObject(): Record<string, string[]> {
    const map = this.loadMap();
    const obj: Record<string, string[]> = {};
    for (const [key, value] of map.entries()) {
      obj[key] = value;
    }
    return obj;
  }
}
/*
export class CookieMap {
  constructor(private cookieName: string) {
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

  private loadMap(): Map<string, string[]> {
    const cookieValue = this.getCookie();
    if (!cookieValue) return new Map();
    try {
      const obj = JSON.parse(cookieValue);
      const map = new Map<string, string[]>();
      for (const key in obj) {
        if (Array.isArray(obj[key])) {
          map.set(key, obj[key]);
        }
      }
      return map;
    } catch {
      return new Map();
    }
  }

  private updateCookie(map: Map<string, string[]>): void {
    const obj: Record<string, string[]> = {};
    for (const [key, values] of map.entries()) {
      obj[key] = values;
    }
    this.setCookie(JSON.stringify(obj));
  }

  add(key: string, value: string): void {
    const map = this.loadMap();
    const values = map.get(key) || [];
    if (!values.includes(value)) {
      values.push(value);
      map.set(key, values);
      this.updateCookie(map);
    }
  }

  remove(key: string, value: string): void {
    const map = this.loadMap();
    const values = map.get(key);
    if (!values) return;
    const index = values.indexOf(value);
    if (index !== -1) {
      values.splice(index, 1);
      if (values.length === 0) {
        map.delete(key);
      } else {
        map.set(key, values);
      }
      this.updateCookie(map);
    }
  }

  has(key: string, value: string): boolean {
    const map = this.loadMap();
    const values = map.get(key);
    return values ? values.includes(value) : false;
  }

  get(key: string): string[] {
    const map = this.loadMap();
    return map.get(key) || [];
  }

  keys(): string[] {
    return Array.from(this.loadMap().keys());
  }

  toObject(): Record<string, string[]> {
    const map = this.loadMap();
    const obj: Record<string, string[]> = {};
    for (const [key, value] of map.entries()) {
      obj[key] = value;
    }
    return obj;
  }
}
  */