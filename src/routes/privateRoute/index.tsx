import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts';
import { Loading } from '@/components/utility';

export function privateRoute(Component: any) {
    return function PrivateRoute(props: JSX.IntrinsicAttributes) {
        const auth = useAuth()
        const router = useRouter()
        if (!auth.user) {
            router.push('/auth')
            return <Loading />
        }
        return <Component {...props} />
    }
}