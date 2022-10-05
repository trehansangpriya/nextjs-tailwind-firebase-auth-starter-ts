import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts';
import { Loading } from '@/components/utility';


export function publicRoute(Component: any) {
    return function PublicRoute(props: JSX.IntrinsicAttributes) {
        const auth = useAuth()
        const router = useRouter()
        if (auth.user) {
            if (router.pathname === '/auth') {
                router.push('/')
                return <Loading />
            }
        }
        return <Component {...props} />
    }
}