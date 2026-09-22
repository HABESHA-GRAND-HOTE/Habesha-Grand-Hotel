import { CalendarDays, Hotel, LayoutDashboard, LogOut, Settings, Users } from 'lucide-react';

const metrics = [
  { label: 'Occupancy', value: '78%', detail: '+6.4% this week' },
  { label: 'Active bookings', value: '124', detail: '18 arriving today' },
  { label: 'Monthly revenue', value: '$84.6k', detail: '+12.8% this month' },
];

export default function App() {
  return (
    <main className="admin-shell">
      <aside className="sidebar">
        <div className="brand"><Hotel size={22} /><span>Habesha Grand</span></div>
        <nav aria-label="Admin navigation">
          <a className="active" href="#dashboard"><LayoutDashboard size={18} /> Dashboard</a>
          <a href="#bookings"><CalendarDays size={18} /> Bookings</a>
          <a href="#guests"><Users size={18} /> Guests</a>
          <a href="#settings"><Settings size={18} /> Settings</a>
        </nav>
        <button className="logout" type="button"><LogOut size={18} /> Sign out</button>
      </aside>
      <section className="content">
        <header className="topbar"><div><p className="eyebrow">Operations center</p><h1>Good morning, Admin</h1></div><span className="avatar">AG</span></header>
        <div className="metrics">{metrics.map((metric) => <article className="metric" key={metric.label}><p>{metric.label}</p><strong>{metric.value}</strong><span>{metric.detail}</span></article>)}</div>
        <section className="panel"><div className="panel-heading"><div><p className="eyebrow">Today</p><h2>Recent reservations</h2></div><button type="button">View all</button></div><div className="empty-state"><CalendarDays size={30} /><p>No reservation data is connected yet.</p><span>Connect the backend to manage arrivals, rooms, and guest records.</span></div></section>
      </section>
    </main>
  );
}
