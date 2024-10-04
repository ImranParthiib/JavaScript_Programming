import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Mail,
  Phone,
  Globe,
  Search,
  MapPin,
  Briefcase,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Profiler = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const fetchedUsers = await response.json();
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Loading Users...
        </h1>
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/30">
              <CardHeader className="flex flex-row items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </CardHeader>
              <CardContent className="mt-6">
                <Skeleton className="h-6 w-[280px] mb-2" />
                <Skeleton className="h-6 w-[240px] mb-2" />
                <Skeleton className="h-6 w-[180px]" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center">
        <Alert variant="destructive" className="max-w-lg">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error.message || "An error occurred while fetching users."}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className=" h-screen bg-gradient-to-br from-blue-300 to-gray-400">
      <motion.h1
        className="text-4xl py-3 md:text-6xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        User Profiles
      </motion.h1>
      <motion.div
        className="max-w-md mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-3/5 md:w-full mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by name or email"
            className="pl-12 pr-4 py-3 w-full rounded-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>
      <motion.div
        className="mx-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredUsers.map((user) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: user.id * 0.1 }}
          >
            <Card className="backdrop-blur-sm bg-white/30 hover:bg-white/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <CardHeader className="flex flex-row items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={`https://i.pravatar.cc/150?u=${user.email}`}
                  />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl font-semibold text-gray-800">
                    {user.name}
                  </CardTitle>
                  <p className="text-lg text-gray-600">@{user.username}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-lg text-gray-700">
                    <Mail className="mr-2 h-5 w-5 opacity-70" /> {user.email}
                  </div>
                  <div className="flex items-center text-lg text-gray-700">
                    <Phone className="mr-2 h-5 w-5 opacity-70" /> {user.phone}
                  </div>
                  <div className="flex items-center text-lg text-gray-700">
                    <Globe className="mr-2 h-5 w-5 opacity-70" /> {user.website}
                  </div>
                </div>
                <Button
                  className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => handleViewProfile(user)}
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">
              User Profile
            </DialogTitle>
            <DialogDescription className="text-lg">
              Detailed information about the selected user.
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="mt-6">
              <div className=" flex items-center mb-6">
                <Avatar className="h-25 w-25 mr-6 ">
                  <AvatarImage
                    src={`https://i.pravatar.cc/150?u=${selectedUser.email}`}
                  />
                  <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {selectedUser.name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    @{selectedUser.username}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-lg text-gray-700">
                  <Users className="mr-2 h-5 w-5 opacity-70" /> Company:{" "}
                  {selectedUser.company.name}
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <MapPin className="mr-2 h-5 w-5 opacity-70" /> Address:{" "}
                  {selectedUser.address.street}, {selectedUser.address.city}
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <Briefcase className="mr-2 h-5 w-5 opacity-70" /> Company{" "}
                  {selectedUser.company.name}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profiler;
