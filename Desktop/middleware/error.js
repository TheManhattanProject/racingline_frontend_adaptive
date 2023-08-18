function asyncHandler(fn) {
    return async ({ url, page, cookies, auth, req, res, body }) => {
        try {
            return await fn({ url, page, cookies, auth, req, res, body });
        } catch (error) {
            return {
                suc: false,
                err: error.message,
                res: {
                    redirect: {
                        destination: '/auth/signup',
                        permanent: false,
                    }
                }
            };
        }
    }
}

export { asyncHandler };

