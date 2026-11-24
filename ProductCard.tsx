import Image from 'next/image';
import type { Product } from '@/data/products';

type ProductCardProps = Product;

export default function ProductCard({ image, title, description, price }: ProductCardProps) {
    return (
        <article className="flex h-full w-full flex-col rounded-[32px] bg-white p-5 shadow-sm">
            {/* Подложка изображения: если image не задан — заглушка «фото» */}
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={400}
                        className="h-full w-full object-contain"
                    />
                ) : (
                    <span className="text-2xl text-slate-400 select-none">фото</span>
                )}
            </div>

            <h2 className="mt-6 font-title text-2xl font-extrabold tracking-tight text-ink">
                {title}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-ink/80">{description}</p>

            <p className="mt-2 text-sm text-ink/80">{price} ₽</p>

            <button
                type="button"
                className="mt-4 self-start rounded-full bg-brand px-8 py-3 text-xs font-semibold uppercase text-white transition-colors duration-200 hover:bg-brand-dark"
            >
                в корзину
            </button>
        </article>
    );
}
