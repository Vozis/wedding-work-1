import prisma from '@/db/prisma';
import { DataType } from '@/types/data';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data: DataType = await request.json();
  try {
    const newDataItem = await prisma.data.create({
      data: {
        name: data.name,
        confirmation: data.confirmation === 'true',
        foodTaste: data.foodTaste,
        alcoholTastes: data.alcoholTaste,
      },
    });
    return NextResponse.json({
      status: 'ok',
    });
  } catch (e) {
    console.log(e);
  }
}
