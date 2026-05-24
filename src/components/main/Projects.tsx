'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Terminal, Server, AlertTriangle, RefreshCw } from 'lucide-react'

// Terminal messages simulation
const terminalLogs = [
  { text: 'aviral@net-lab:~$ ssh guest@projects.aviral.verma', delay: 800 },
  { text: 'Connecting to projects-host-v2 (192.168.1.150)...', delay: 1000 },
  { text: 'Warning: Permanently added \'projects.aviral.verma\' to the list of known hosts.', delay: 800 },
  { text: 'guest@projects.aviral.verma\'s password: **************', delay: 1200 },
  { text: 'Last login: Mon May 25 00:44:09 2026 from 10.0.12.44', delay: 600 },
  { text: ' ', delay: 200 },
  { text: '==================================================', delay: 400 },
  { text: '  Welcome to Aviral Verma\'s Project Sandbox & Lab  ', delay: 400 },
  { text: '==================================================', delay: 400 },
  { text: '[STATUS] Current Mode: MAINTENANCE_MODE', delay: 800 },
  { text: '[CONFIG] Re-wiring network topologies & subnet masks...', delay: 1000 },
  { text: '[DATA] Importing Pandas dataframes & scikit-learn models...', delay: 1200 },
  { text: '[DEPLOY] Establishing AWS Multi-VPC Transit Gateways...', delay: 1000 },
  { text: '[WARNING] Page state: Under Active Construction', delay: 600 },
  { text: '[SYSTEM] Re-routing traffic to primary landing profile...', delay: 800 },
  { text: 'Connection closed by remote host.', delay: 1000 },
  { text: 'aviral@net-lab:~$ _', delay: 1500 }
]

const Projects = () => {
  const [logs, setLogs] = useState<string[]>([])
  const [currentLogIndex, setCurrentLogIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const terminalEndRef = useRef<HTMLDivElement>(null)

  // Simulation loop for typing out logs
  useEffect(() => {
    if (currentLogIndex >= terminalLogs.length) {
      // Loop logs after a delay
      const timer = setTimeout(() => {
        setLogs([])
        setCurrentLogIndex(0)
        setIsTyping(true)
      }, 5000)
      return () => clearTimeout(timer)
    }

    const currentLog = terminalLogs[currentLogIndex]
    const timer = setTimeout(() => {
      setLogs((prev) => [...prev, currentLog.text])
      setCurrentLogIndex((prev) => prev + 1)
      if (currentLogIndex === terminalLogs.length - 1) {
        setIsTyping(false)
      }
    }, currentLog.delay)

    return () => clearTimeout(timer)
  }, [currentLogIndex])

  // Scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Animated Background Elements in Sunshine theme */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 left-16 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-80 right-24 w-20 h-20 bg-amber-500/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-60 left-1/3 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/4 w-24 h-24 bg-orange-400/10 rounded-lg rotate-12 float-animation"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-amber-400/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 title="Projects Sandbox" className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-amber-500 bg-clip-text text-transparent mb-4">
            Projects Sandbox
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A real-time display of my networking labs, cloud topologies, and data analytics models.
          </p>
        </motion.div>

        {/* Main Under Construction Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left Side: Server Rack Chassis (Animated SVG/HTML Cisco Router look) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl glass-effect border border-primary/20 bg-card/60 backdrop-blur-md relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Server className="h-5 w-5 text-primary animate-pulse" />
                <h3 className="text-lg font-semibold tracking-tight text-foreground">Hardware Stack Status</h3>
                <span className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <RefreshCw className="h-3 w-3 animate-spin" />
                  MAINTENANCE
                </span>
              </div>

              {/* Server Rack Box */}
              <div className="w-full bg-neutral-950 rounded-xl p-4 border border-neutral-800 shadow-2xl flex flex-col gap-4 font-mono text-xs">
                {/* Rack Unit 1: Gateway Router */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 relative shadow-inner">
                  <div className="flex justify-between items-center text-neutral-400 mb-2">
                    <span className="text-[10px] font-bold tracking-wider text-primary">GW-ROUTER-01 (1U)</span>
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[8px] text-neutral-500">SYS</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping"></span>
                        <span className="text-[8px] text-neutral-500">ACT</span>
                      </span>
                    </div>
                  </div>
                  {/* Vent holes / LEDs */}
                  <div className="flex items-center justify-between bg-black rounded p-1.5 border border-neutral-950">
                    <div className="grid grid-cols-8 gap-1.5">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center gap-0.5">
                          <span className={`h-1.5 w-1.5 rounded-sm ${i % 3 === 0 ? 'bg-green-500 animate-pulse' : i % 3 === 1 ? 'bg-emerald-600' : 'bg-neutral-800'}`}></span>
                          <span className="text-[6px] text-neutral-600">{i}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-[9px] text-emerald-400/80 font-bold tracking-widest animate-pulse">10G-UP</span>
                  </div>
                </div>

                {/* Rack Unit 2: Layer 3 Core Switch */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 relative shadow-inner">
                  <div className="flex justify-between items-center text-neutral-400 mb-2">
                    <span className="text-[10px] font-bold tracking-wider text-primary">CORE-SWITCH-02 (2U)</span>
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        <span className="text-[8px] text-neutral-500">SYS</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                        <span className="text-[8px] text-neutral-500">ALM</span>
                      </span>
                    </div>
                  </div>
                  {/* Ports Grid */}
                  <div className="grid grid-cols-12 gap-1 bg-black rounded p-2 border border-neutral-950">
                    {[...Array(24)].map((_, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className={`h-2 w-2 rounded-sm border border-neutral-800 ${i === 2 || i === 5 || i === 8 || i === 15 || i === 22 ? 'bg-amber-400 animate-pulse' : i % 2 === 0 ? 'bg-green-500' : 'bg-neutral-900'}`}></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rack Unit 3: Analytics Host / VM Server */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 relative shadow-inner">
                  <div className="flex justify-between items-center text-neutral-400 mb-2">
                    <span className="text-[10px] font-bold tracking-wider text-primary">DATA-HOST-03 (1U)</span>
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        <span className="text-[8px] text-neutral-500">SYS</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping"></span>
                        <span className="text-[8px] text-neutral-500">VM</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-black rounded p-1.5 border border-neutral-950">
                    <span className="text-[9px] text-neutral-400">MEM: <span className="text-amber-500 animate-pulse">84%</span></span>
                    <div className="w-24 bg-neutral-850 h-2 rounded overflow-hidden">
                      <div className="bg-gradient-to-r from-green-500 to-amber-500 h-full w-[84%] animate-pulse"></div>
                    </div>
                    <span className="text-[8px] text-green-400 font-bold">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware Status Note */}
            <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex gap-3 items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">Under Construction</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  The network lab components and data models are currently undergoing routine maintenance and software upgrades.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Terminal Console */}
          <motion.div 
            className="lg:col-span-7 flex flex-col p-6 rounded-2xl glass-effect border border-primary/20 bg-card/60 backdrop-blur-md min-h-[380px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4 border-b border-primary/10 pb-3">
              <Terminal className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold tracking-tight text-foreground">Net-Lab Terminal Console</h3>
              {/* Window Controls */}
              <div className="ml-auto flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80"></span>
              </div>
            </div>

            {/* Terminal Window Box */}
            <div className="flex-1 bg-black/90 text-neutral-200 p-4 rounded-xl font-mono text-xs overflow-y-auto max-h-[320px] custom-scrollbar border border-neutral-900 flex flex-col justify-start">
              <div className="space-y-1.5">
                {logs.map((log, idx) => {
                  let colorClass = 'text-neutral-300'
                  if (log.startsWith('[WARNING]')) colorClass = 'text-amber-400 font-bold'
                  else if (log.startsWith('[STATUS]')) colorClass = 'text-green-400'
                  else if (log.startsWith('[CONFIG]')) colorClass = 'text-blue-400'
                  else if (log.startsWith('[DATA]')) colorClass = 'text-purple-400'
                  else if (log.startsWith('[DEPLOY]')) colorClass = 'text-cyan-400'
                  else if (log.startsWith('aviral@net-lab')) colorClass = 'text-primary font-semibold'
                  else if (log.startsWith('===')) colorClass = 'text-neutral-500'
                  
                  return (
                    <div key={idx} className={`${colorClass} leading-relaxed break-words`}>
                      {log}
                    </div>
                  )
                })}
                {isTyping && (
                  <div className="flex items-center gap-0.5 text-neutral-400 animate-pulse">
                    <span>Loading assets</span>
                    <span className="animate-[bounce_1s_infinite_100ms]">.</span>
                    <span className="animate-[bounce_1s_infinite_200ms]">.</span>
                    <span className="animate-[bounce_1s_infinite_300ms]">.</span>
                  </div>
                )}
                <div ref={terminalEndRef} />
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Simulated logs of active builds. Real-world GitHub repositories will be linkable here soon.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Projects
