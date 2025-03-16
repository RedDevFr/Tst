// src/components/Profile.tsx
import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../services/userService';
import { User } from '../models/User';

const Profile: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getUserProfile();
                setUser(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleUpdate = async (updatedUser: User) => {
        try {
            await updateUserProfile(updatedUser);
            setUser(updatedUser);
            setIsEditing(false);
        } catch (err) {
            setError(err);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!user) return <p>Profil non trouvé.</p>;

    return (
        <div>
            {isEditing ? (
                <ProfileForm user={user} onUpdate={handleUpdate} />
            ) : (
                <ProfileDetails user={user} onEdit={() => setIsEditing(true)} />
            )}
        </div>
    );
};

// Composant pour afficher les détails du profil
const ProfileDetails: React.FC<{ user: User; onEdit: () => void }> = ({ user, onEdit }) => {
    return (
        <div>
            <h2>Profil de {user.username}</h2>
            <p>Email: {user.email}</p>
            {/* ... autres détails du profil ... */}
            <button onClick={onEdit}>Modifier le profil</button>
        </div>
    );
};

// Composant pour le formulaire de modification du profil
const ProfileForm: React.FC<{ user: User; onUpdate: (user: User) => void }> = ({ user, onUpdate }) => {
    const [updatedUser, setUpdatedUser] = useState(user);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(updatedUser);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* ... champs de modification du profil ... */}
            <button type="submit">Enregistrer les modifications</button>
        </form>
    );
};

export default Profile;
