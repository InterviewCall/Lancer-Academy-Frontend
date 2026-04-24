"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

const RefundPolicyButton: FC = () => {
    const router = useRouter();
    return (
        <u onClick={() => router.push('/refund-policy')} className="cursor-pointer hover:text-blue-600">Refund Policy</u>
    );
};

export default RefundPolicyButton;