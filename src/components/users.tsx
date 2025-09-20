"use client";

import React, { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Trash2, Search } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

export default function ProfilePage() {
  const defaultUsers: User[] = [
    { id: 1, name: "Hamid", email: "hamid@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Pakeeza", email: "pakeeza@example.com", role: "User", status: "Active" },
    { id: 3, name: "Ali", email: "ali@example.com", role: "User", status: "Inactive" },
    { id: 4, name: "Sara", email: "sara@example.com", role: "User", status: "Active" },
    { id: 5, name: "Zain", email: "zain@example.com", role: "User", status: "Active" },
    { id: 6, name: "Ayesha", email: "ayesha@example.com", role: "User", status: "Active" },
    { id: 7, name: "Farhan", email: "farhan@example.com", role: "User", status: "Inactive" },
    { id: 8, name: "Noor", email: "noor@example.com", role: "User", status: "Active" },
    { id: 9, name: "Omar", email: "omar@example.com", role: "User", status: "Active" },
    { id: 10, name: "Hina", email: "hina@example.com", role: "User", status: "Active" },
    { id: 11, name: "Rehan", email: "rehan@example.com", role: "User", status: "Inactive" },
    { id: 12, name: "Sara B", email: "sarab@example.com", role: "User", status: "Active" },
    { id: 13, name: "Usman", email: "usman@example.com", role: "User", status: "Active" },
    { id: 14, name: "Laraib", email: "laraib@example.com", role: "User", status: "Active" },
    { id: 15, name: "Areeba", email: "areeba@example.com", role: "User", status: "Inactive" },
    { id: 16, name: "Bilal", email: "bilal@example.com", role: "User", status: "Active" },
    { id: 17, name: "Fatima", email: "fatima@example.com", role: "User", status: "Active" },
    { id: 18, name: "Haris", email: "haris@example.com", role: "User", status: "Active" },
    { id: 19, name: "Iqra", email: "iqra@example.com", role: "User", status: "Inactive" },
    { id: 20, name: "Sami", email: "sami@example.com", role: "User", status: "Active" },
  ];

  const [users, setUsers] = useState<User[]>(defaultUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState("");

  const addUser = () => {
    if (!newUser.name || !newUser.email) return;
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { ...newUser, id }]);
    setNewUser({ id: 0, name: "", email: "", role: "User", status: "Active" });
    setShowAdd(false);
  };

  const updateUser = () => {
    if (!editingUser) return;
    setUsers(users.map((u) => (u.id === editingUser.id ? editingUser : u)));
    setEditingUser(null);
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  const columns: ColumnDef<User>[] = [
    { header: "#", cell: (info) => filteredUsers.indexOf(info.row.original) + 1 },
    {
      header: "Name",
      cell: (info) =>
        editingUser?.id === info.row.original.id ? (
          <Input
            value={editingUser.name}
            onChange={(e) =>
              setEditingUser({ ...editingUser, name: e.target.value })
            }
            className="bg-gray-900 text-white rounded-md placeholder-gray-400"
          />
        ) : (
          <span className="text-white">{info.getValue()}</span>
        ),
    },
    {
      header: "Email",
      cell: (info) =>
        editingUser?.id === info.row.original.id ? (
          <Input
            value={editingUser.email}
            onChange={(e) =>
              setEditingUser({ ...editingUser, email: e.target.value })
            }
            className="bg-gray-900 text-white rounded-md placeholder-gray-400"
          />
        ) : (
          <span className="text-white">{info.getValue()}</span>
        ),
    },
    {
      header: "Role",
      cell: (info) =>
        editingUser?.id === info.row.original.id ? (
          <Input
            value={editingUser.role}
            onChange={(e) =>
              setEditingUser({ ...editingUser, role: e.target.value })
            }
            className="bg-gray-900 text-white rounded-md placeholder-gray-400"
          />
        ) : (
          <span className="text-white">{info.getValue()}</span>
        ),
    },
    {
      header: "Status",
      cell: (info) =>
        editingUser?.id === info.row.original.id ? (
          <Input
            value={editingUser.status}
            onChange={(e) =>
              setEditingUser({ ...editingUser, status: e.target.value })
            }
            className="bg-gray-900 text-white rounded-md placeholder-gray-400"
          />
        ) : (
          <span className="text-white">{info.getValue()}</span>
        ),
    },
    {
      header: "Actions",
      cell: (info) =>
        editingUser?.id === info.row.original.id ? (
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={updateUser}
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-md"
            >
              Save
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setEditingUser(null)}
              className="text-white"
            >
              Cancel
            </Button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setEditingUser(info.row.original)}
              className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-800 rounded-md"
            >
              <Edit />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => deleteUser(info.row.original.id)}
              className="text-pink-500 hover:text-pink-400 hover:bg-gray-800 rounded-md"
            >
              <Trash2 />
            </Button>
          </div>
        ),
    },
  ];

  const table = useReactTable({
    data: filteredUsers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-6 p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400">
        🌐 User Management
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <div className="flex gap-2 flex-1 items-center bg-gray-800 rounded-md p-2">
          <Search className="w-5 h-5 text-cyan-400" />
          <Input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-800 text-white placeholder-gray-400 flex-1 rounded-md"
          />
        </div>
        <Button
          onClick={() => setShowAdd(!showAdd)}
          className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:scale-105 text-white mt-2 md:mt-0"
        >
          {showAdd ? "Close Add" : "Add User"}
        </Button>
      </div>

      {showAdd && (
        <Card className="bg-gray-800/60 backdrop-blur-md p-4 rounded-xl shadow-[0_0_25px_rgba(236,72,153,0.5)] border border-gray-700">
          <div className="flex gap-2 flex-wrap">
            <Input
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="bg-gray-800 text-white rounded-md flex-1"
            />
            <Input
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="bg-gray-800 text-white rounded-md flex-1"
            />
            <Button
              onClick={addUser}
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-md"
            >
              Add
            </Button>
          </div>
        </Card>
      )}

      <Card className="bg-gray-800/70 backdrop-blur-md rounded-xl shadow-[0_0_25px_rgba(236,72,153,0.7)] border border-gray-700 overflow-auto">
        <CardContent className="p-0">
          <Table className="table-auto border-collapse text-white">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="bg-gray-900/80">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="border-r border-gray-700 px-4 py-2 text-cyan-400 font-bold drop-shadow-[0_0_5px_cyan]"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="transition-all border-b border-gray-700 hover:bg-gray-700/50"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="border-r border-gray-700 px-4 py-2 text-white"
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-white"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
