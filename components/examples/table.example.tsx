"use client";

import * as React from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { Example } from "@/components/examples/example";

type Invoice = {
  id: string;
  customer: string;
  status: "Paid" | "Pending" | "Unpaid";
  amount: number;
};

const invoices: Invoice[] = [
  {
    id: "INV-001",
    customer: "김민수",
    status: "Paid",
    amount: 120000,
  },
  {
    id: "INV-002",
    customer: "이영희",
    status: "Pending",
    amount: 89000,
  },
  {
    id: "INV-003",
    customer: "박철수",
    status: "Unpaid",
    amount: 45000,
  },
];

export function TableExample() {
  const totalAmount = invoices.reduce((sum, i) => sum + i.amount, 0);

  return (
    <Example
      title="Table"
      description="Tables are used to display data in a structured format."
    >
    <div className="w-full max-w-3xl">
      <Table>
        <TableCaption>최근 발행된 인보이스 목록</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Invoice ID</TableHead>
            <TableHead>고객명</TableHead>
            <TableHead>상태</TableHead>
            <TableHead className="text-right">금액</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell className="text-right">
                {invoice.amount.toLocaleString()}원
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>총 합계</TableCell>
            <TableCell className="text-right font-semibold">
              {totalAmount.toLocaleString()}원
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
    </Example>
  );
}
