let reminderInterval;

document.getElementById("startReminder").addEventListener("click", () => {
    document.getElementById("message").innerText = "Reminder set! Stay hydrated! 💦";
    document.getElementById("startReminder").classList.add("hidden");
    document.getElementById("stopReminder").classList.remove("hidden");

    reminderInterval = setInterval(() => {
        alert("💧 Time to drink water!");
    }, 3600000); // Reminds every 1 hour (3600000ms)
});

document.getElementById("stopReminder").addEventListener("click", () => {
    clearInterval(reminderInterval);
    document.getElementById("message").innerText = "Reminder stopped. Stay hydrated manually! 😊";
    document.getElementById("startReminder").classList.remove("hidden");
    document.getElementById("stopReminder").classList.add("hidden");
});
