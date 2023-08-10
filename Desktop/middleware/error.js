function asyncHandler(fn) {
    return async ({ url, page, cookies, auth, req, res }) => {
        try {
            return await fn({ url, page, cookies, auth, req, res });
        } catch (error) {
            return {
                suc: false,
                err: error.message,
                res: {
                    redirect: {
                        destination: '/404',
                        permanent: false,
                    },
                },
            };
        }
    }
}

export { asyncHandler };

