from django.db import models
from django.contrib.auth.models import User


class Expense(models.Model):

    CATEGORY_CHOICES = [
        ("Food", "Food"),
        ("Travel", "Travel"),
        ("Shopping", "Shopping"),
        ("Education", "Education"),
        ("Entertainment", "Entertainment"),
        ("Bills", "Bills"),
        ("Other", "Other"),
    ]

    user = models.ForeignKey(
    User,
    on_delete=models.CASCADE,
    null=True,
    blank=True
)
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES
    )

    description = models.CharField(
        max_length=255
    )

    date = models.DateField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.description} - ₹{self.amount}"