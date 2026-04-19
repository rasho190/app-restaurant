import { ElectronicInvoicingProvider } from './provider.js';

export class MockElectronicInvoicingProvider implements ElectronicInvoicingProvider {
  async generatePayload(invoice: Record<string, unknown>) {
    return { mode: 'mock', generatedAt: new Date().toISOString(), invoice };
  }

  async sendInvoice(payload: Record<string, unknown>) {
    return { status: 'SENT', hash: `MOCK-${Date.now()}`, message: JSON.stringify(payload).slice(0, 64) };
  }

  async cancelInvoice(invoiceId: string, reason: string) {
    return { status: 'CANCELED', message: `Invoice ${invoiceId} canceled (${reason})` };
  }

  async getStatus(reference: string) {
    return { status: 'ACCEPTED', raw: { reference, provider: 'mock' } };
  }
}
