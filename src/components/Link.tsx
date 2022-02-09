import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { styled } from '@mui/material/styles';

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled( 'a' )( {
    textDecoration: 'none',
    fontSize: '14px'
} );

interface NextLinkComposedProps
    extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<NextLinkProps, 'href' | 'as'> {
    to: NextLinkProps[ 'href' ];
    linkAs?: NextLinkProps[ 'as' ];
    href?: NextLinkProps[ 'href' ];
}

export const NextLinkComposed = React.forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
    function NextLinkComposed ( props, ref ) {
        const { to, linkAs, href, replace, scroll, shallow, prefetch, locale, ...other } = props;

        return (
            <NextLink
                href={ to }
                prefetch={ prefetch }
                as={ linkAs }
                replace={ replace }
                scroll={ scroll }
                shallow={ shallow }
                passHref
                locale={ locale }
            >
                <Anchor ref={ ref } { ...other } />
            </NextLink>
        );
    },
);

export type LinkProps = {
    activeClassName?: string;
    as?: NextLinkProps[ 'as' ];
    href: NextLinkProps[ 'href' ];
    noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
    Omit<MuiLinkProps, 'href'>;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    function Link ( props, ref ) {
        const {
            activeClassName = 'active',
            as: linkAs,
            className: classNameProps,
            href,
            noLinkStyle,
            role, // Link don't have roles.
            ...other
        } = props;

        const router = useRouter();
        const pathname = typeof href === 'string' ? href : href.pathname;
        const isActive = router && router.pathname === pathname;
        const className = clsx( classNameProps, {
            [ activeClassName ]: isActive && activeClassName,
        } );

        const isExternal =
            typeof href === 'string' && ( href.indexOf( 'http' ) === 0 || href.indexOf( 'mailto:' ) === 0 );

        if ( isExternal ) {
            if ( noLinkStyle ) {
                return <Anchor className={ className } href={ href } ref={ ref } { ...other } />;
            }

            return <MuiLink className={ className } href={ href } ref={ ref } { ...other } />;
        }

        if ( noLinkStyle ) {
            return <NextLinkComposed className={ className } ref={ ref } to={ href } { ...other } />;
        }


        const isVoid = typeof href === 'string' && ( href.indexOf( 'javascript:' ) === 0 );
        if ( isVoid ) {
            return <span className={ className } { ...other }>{ props.children }</span>
        }

        return (
            <MuiLink
                component={ NextLinkComposed }
                linkAs={ linkAs }
                className={ className }
                ref={ ref }
                to={ href }
                sx={ { color: 'glass.contrastText' } }
                color={ isActive ? 'primary.light' : 'inherit' }
                { ...other }
            />
        );
    } );

export default Link;