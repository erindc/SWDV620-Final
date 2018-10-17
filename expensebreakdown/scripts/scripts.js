const submitExp = async (form) => {
    try {
        let res = await fetch(`http://localhost:3000/submitExp`, {
            method: 'post',
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await res.json();

        localStorage.setItem("res", JSON.stringify(json));
        window.location.href = "../views/chart.html";
    } catch (err) {
        console.log(err);
        return null;
    }
};