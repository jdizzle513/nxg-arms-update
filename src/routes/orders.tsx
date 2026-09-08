import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { loadOrders, type PlacedOrder } from "@/lib/orders";

export const Route = createFileRoute("/orders")({ component: OrdersPage });

function OrdersPage() {
  const [orders, setOrders] = useState<PlacedOrder[]>([]);
  useEffect(() => {
    setOrders(loadOrders());
  }, []);

  return (
    <main className="px-[6%] py-20">
      <p className="text-xs tracking-[0.2em] text-gold uppercase">Shop owner</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Orders</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Customer builds also land in Command Center with Cerakote, texture regions, engraving,
        and kits. This list is a copy on this browser only.
      </p>
      {orders.length === 0 ? (
        <p className="mt-10 text-sm text-muted">No orders yet.</p>
      ) : (
        <ul className="mt-10 space-y-5">
          {orders.map((order) => (
            <li key={order.id} className="border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-xl">{order.id}</h2>
                <p className="font-display text-xl text-gold">${order.total}</p>
              </div>
              <p className="mt-1 text-xs text-muted">
                {new Date(order.at).toLocaleString()}
              </p>
              <ul className="mt-4 space-y-4">
                {order.items.map((item) => (
                  <li key={item.id}>
                    <p className="text-sm font-medium">
                      {item.name} · {item.platform}
                      {item.qty && item.qty > 1 ? ` · Qty ${item.qty}` : ""}
                    </p>
                    <ul className="mt-1 space-y-0.5 text-sm text-muted">
                      {item.details.map((line) => (
                        <li key={line}>+ {line}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
      <Link to="/cart" className="mt-10 inline-block text-xs tracking-[0.14em] text-gold uppercase">
        ← Cart
      </Link>
    </main>
  );
}
