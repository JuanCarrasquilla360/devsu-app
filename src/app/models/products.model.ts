export interface ProductsModel {
    id: string;
    name: string;
    description: string;
    logo: string;
    date_release: string | Date;
    date_revision: string | Date;
  }