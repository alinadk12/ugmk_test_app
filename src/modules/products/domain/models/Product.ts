import { number, string, object, InferType } from 'yup';
import { ValidationError } from 'src/errors/ValidationError';

type DataType = Record<string, string | number | null>;

export class Product {
    public id: number;
    public factory_id: number;
    public date: string | null;
    public product1: number;
    public product2: number;
    public product3: number;

    constructor(data: DataType) {
        const validatedData = productSchema.validateSync(data, { strict: true });
        if (validatedData) {
            this.setData(validatedData);
        } else {
            throw new ValidationError();
        }
    }

    private setData(data: InferType<typeof productSchema>): void {
        this.id = data.id;
        this.factory_id = data.factory_id;
        this.date = data.date;
        this.product1 = data.product1 || 0;
        this.product2 = data.product2 || 0;
        this.product3 = data.product3 || 0;
    }
}

const productSchema = object({
    id: number().defined(),
    factory_id: number().defined(),
    date: string().nullable().defined(),
    product1: number().nullable().defined(),
    product2: number().nullable().defined(),
    product3: number().nullable().defined(),
});
