import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Product',
        href: '/products',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <table className="table-auto width-full">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Featured Image</th>
                    <th>Created At</th>
                    <th>Action</th>
                </table>
            </div>
        </AppLayout>
    );
}
