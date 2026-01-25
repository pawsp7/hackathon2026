class gameEvent {
    private name: string;
    private price: number;
    private description: string;

    constructor(name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    acceptEvent(balance: number): number {
        balance -= this.price;
        return balance;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }
}