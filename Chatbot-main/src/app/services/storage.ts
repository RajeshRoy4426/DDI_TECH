import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Storage {

  constructor() { }

  /**
   * Set item in local storage
   * @param key - The key to set
   * @param value - The value to set
   */
  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Get item from local storage
   * @param key - The key to get
   * @returns The value from the local storage
   */
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

  /**
   * Remove item from local storage
   * @param key - The key to remove
   */
  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  /**
   * Clear all items from local storage
   */
  clear() {
    localStorage.clear();
  }

}
