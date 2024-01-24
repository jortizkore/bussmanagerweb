import { ProductComponent } from '../../components/product/product.component'

export const bussinessSideNavRoutes = [
    {
        label: 'Inventory',
        component: ProductComponent,
        icon: 'menu'
    },
    {
        label: 'Expendable material',
        component: null,
        icon: 'newspaper'
    },
    {
        label: 'Purchases',
        component: null,
        icon: 'shopping_bag'
    },
    {
        label: 'Sales',
        component: null,
        icon: 'trending_up'
    },
    {
        label: 'Accounts to receive',
        component: null,
        icon: 'payments'
    },
    {
        label: 'Accounts to pay',
        component: null,
        icon: 'paid'
    },
    {
        label: 'Clients',
        component: null,
        icon: 'group_add'
    },
    {
        label: 'Providers',
        component: null,
        icon: 'location_city'
    },
    {
        label: 'Employees',
        component: null,
        icon: 'diversity_3'
    },
    {
        label: 'Lost',
        component: null,
        icon: 'report'
    },


]