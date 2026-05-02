const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;

    const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
        image,
        callbackURL: "/login"
    });

    if (error) {
        toast.error(error.message || "Registration failed!");
    } else {
        toast.success("Account Created Successfully!");
        router.push('/login');
    }
    setLoading(false);
};