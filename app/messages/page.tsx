"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Search, MoreHorizontal } from "lucide-react"

interface Message {
  id: number
  sender: string
  avatar: string
  content: string
  timestamp: string
  isOwn: boolean
}

interface Conversation {
  id: number
  name: string
  avatar: string
  lastMessage: string
  lastMessageTime: string
  unread: boolean
}

const mockConversations: Conversation[] = [
  {
    id: 1,
    name: "Emma Thompson",
    avatar: "ET",
    lastMessage: "Sounds great! See you at 3 PM",
    lastMessageTime: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    name: "Maria Garcia",
    avatar: "MG",
    lastMessage: "Thanks for the session yesterday!",
    lastMessageTime: "5 hours ago",
    unread: false,
  },
  {
    id: 3,
    name: "Jake Wilson",
    avatar: "JW",
    lastMessage: "Can we reschedule to next week?",
    lastMessageTime: "1 day ago",
    unread: false,
  },
]

const mockMessages: Message[] = [
  {
    id: 1,
    sender: "Emma Thompson",
    avatar: "ET",
    content: "Hi! I'm interested in learning React. When are you available?",
    timestamp: "10:30 AM",
    isOwn: false,
  },
  {
    id: 2,
    sender: "You",
    avatar: "AJ",
    content: "Great! I have availability Mon-Fri from 3-5 PM. What works for you?",
    timestamp: "10:35 AM",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Emma Thompson",
    avatar: "ET",
    content: "Sounds great! See you at 3 PM",
    timestamp: "10:40 AM",
    isOwn: false,
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0].id)
  const [messageInput, setMessageInput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Backend integration will handle message sending
      setMessageInput("")
    }
  }

  const filteredConversations = mockConversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Messages</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <Card className="md:col-span-1 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`w-full text-left p-4 border-b border-border hover:bg-muted/50 transition flex items-start gap-3 ${
                    selectedConversation === conversation.id ? "bg-muted" : ""
                  }`}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground flex-shrink-0">
                    {conversation.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-semibold text-sm ${conversation.unread ? "text-foreground" : "text-foreground/70"}`}
                    >
                      {conversation.name}
                    </p>
                    <p
                      className={`text-xs truncate ${conversation.unread ? "text-foreground/70 font-medium" : "text-foreground/50"}`}
                    >
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>}
                </button>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="md:col-span-2 overflow-hidden flex flex-col">
            {selectedConversation && (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                      ET
                    </div>
                    <div>
                      <p className="font-semibold">Emma Thompson</p>
                      <p className="text-xs text-foreground/50">Active now</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal size={18} />
                  </Button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {mockMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                      <div className={`flex gap-2 max-w-xs ${message.isOwn ? "flex-row-reverse" : ""}`}>
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground flex-shrink-0">
                          {message.avatar}
                        </div>
                        <div>
                          <div
                            className={`px-4 py-2 rounded-lg ${
                              message.isOwn ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                          <p className="text-xs text-foreground/50 mt-1">{message.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-border flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} className="bg-primary hover:bg-primary/90 gap-2">
                    <Send size={18} />
                  </Button>
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
