import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { updateUserProfile } from '../utils/user'; // Fonction utilitaire pour mettre à jour les informations utilisateur

export default function Profile() {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (session) {
      // Initialiser les informations de l'utilisateur avec ses données de session
      setUserInfo({
        name: session.user.name,
        email: session.user.email,
        phone: session.user.phone || '',
      });
    }
  }, [session]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserProfile(userInfo);
  };

  return (
    <div>
      <Navbar />
      <main>
        <section className="profile">
          <h1>Your Profile</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}