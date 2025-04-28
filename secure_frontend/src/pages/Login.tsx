import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ import useNavigate
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // ⬅️ initialize it
    const { toast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            setMessage(data.message);

            if (data.message === 'Login successful') {
                navigate('/home'); // ⬅️ redirect on successful login
            }

        } catch (error) {
            console.error('Login error:', error);
            setMessage('Something went wrong');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h1 className="text-center text-3xl font-serif font-bold italic mb-2">
                    <span className="text-news-red">The</span> Daily
                </h1>
                <h2 className="mt-6 text-center text-2xl font-bold tracking-tight">
                    Sign in to your account
                </h2>
            </div>

            <Card className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Button type="submit" className="w-full" size="lg">
                            <LogIn className="mr-2" />
                            Sign in
                        </Button>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <div className="text-sm text-center">
                            <a
                                href="#"
                                className="font-medium text-news-red hover:text-red-700"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <div className="text-sm text-center">
                            Don't have an account?{" "}
                            <a
                                href="#"
                                className="font-medium text-news-red hover:text-red-700"
                            >
                                Sign up
                            </a>
                        </div>
                    </CardFooter>
                </form>
                <p>{message}</p>
            </Card>
        </div>
    );
};


export default Login;
