// Analytics tracking utilities
export interface AnalyticsEvent {
  id?: string;
  event_type: string;
  element_id?: string;
  element_text?: string;
  page_path: string;
  user_agent?: string;
  timestamp: string;
  session_id: string;
  ip_address?: string;
}

export class AnalyticsTracker {
  private sessionId: string;
  private isEnabled: boolean = true;

  constructor() {
    this.sessionId = this.getOrCreateSessionId();
  }

  private getOrCreateSessionId(): string {
    if (typeof window === 'undefined') return '';
    
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  async track(eventType: string, elementId?: string, elementText?: string): Promise<void> {
    // Analytics tracking to Supabase disabled
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Event]: ${eventType} - Element: ${elementId} - Text: ${elementText}`);
    }
  }

  // Common tracking methods
  trackClick(elementId?: string, elementText?: string) {
    return this.track('click', elementId, elementText);
  }

  // Page view tracking disabled - using Vercel Analytics instead
  // trackPageView() {
  //   return this.track('page_view');
  // }

  trackDownload(fileName: string) {
    return this.track('download', fileName);
  }

  trackContact(method: string) {
    return this.track('contact', method);
  }

  trackProjectView(projectName: string) {
    return this.track('project_view', projectName);
  }

  disable() {
    this.isEnabled = false;
  }

  enable() {
    this.isEnabled = true;
  }
}

export const analytics = new AnalyticsTracker();