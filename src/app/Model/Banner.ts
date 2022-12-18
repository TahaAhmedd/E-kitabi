
export class Banner {
 constructor(
        public adClient: string,
        public adSlot: any,
        public adFormat: string,
        public fullWidthResponsive: any) {
            this.adClient = adClient;
            this.adSlot = adSlot;
            this.adFormat = adFormat || 'auto';
            this.fullWidthResponsive = fullWidthResponsive || true;
    }
}