import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

export class CartItem {
    constructor(public menuItem: MenuItem,
        public quantity = 0) { }

    value(): number {
        return this.menuItem.price * this.quantity;
    }
}