"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Users } from "lucide-react"

type CTADict = {
  title: string;
  description: string;
  buttonSupport: string;
  modal: {
    title: string;
    labelBank: string;
    labelBranch: string;
    labelAccountName: string;
    labelAccountNumber: string;
    buttonCopy: string;
    buttonCopied: string;
    buttonClose: string;
    
  }
}

export function CTA({ dict }: { dict: CTADict }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const bank = {
    name: "BNI (Bank Negara Indonesia)",
    accountName: "PAPUA PARADISE CENTER",
    accountNumber: "1944388627",
    branch: "MERAUKE"
  }

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(bank.accountNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">{dict.title}</h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-95 text-pretty">
          {dict.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg font-semibold"
            onClick={() => setOpen(true)}
          >
            <Heart className="mr-2 h-5 w-5" /> {dict.buttonSupport}
          </Button>

          {/* <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 border-2 border-primary-foreground px-8 py-6 text-lg font-semibold"
          >
            <Users className="mr-2 h-5 w-5" />
            Daftar Jadi Relawan
          </Button> */}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-card text-card-foreground rounded-lg p-6 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">{dict.modal.title}</h3>
            <div className="space-y-2 mb-4 text-left">
              <div><span className="font-medium">{dict.modal.labelBank}</span> {bank.name}</div>
              <div><span className="font-medium">{dict.modal.labelBranch}</span> {bank.branch}</div>
              <div><span className="font-medium">{dict.modal.labelAccountName}</span> {bank.accountName}</div>
              <div className="flex items-center">
                <span className="font-medium mr-2">{dict.modal.labelAccountNumber}</span>
                <span className="flex-1">{bank.accountNumber}</span>
                <Button size="sm" className="ml-3 px-3 py-1" onClick={copyAccount}>
                  {copied ? dict.modal.buttonCopied : dict.modal.buttonCopy}
                </Button>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button size="sm" variant="outline" className="px-4 py-2" onClick={() => setOpen(false)}>{dict.modal.buttonClose}</Button>
              {/* <a href="https://donasi.npc.id/galang-dana/v2/emergency-gaza-memanggil" target="_blank" rel="noopener noreferrer">
                <Button size="md" className="px-4 py-2">Buka Halaman Donasi</Button>
              </a> */}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
