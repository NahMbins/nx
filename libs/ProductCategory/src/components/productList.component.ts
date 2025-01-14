/** Product category list default criteria */
const PRODUCT_CATEGORY_LIST_DEFAULT_CRITERIA = { page: 1, pageSize: 20 };

/** Product list component */
export class productList {
  /** List of product categories */
  productCategories: ProductCategory[] = [];

  selectedProductCategory: ProductCategory;

  loadProductCategories() {
    throw new Error('Not implemented');
  }
}
